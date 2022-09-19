/**
 * 모달 창 & 후면 오버레이 컴포넌트
 *
 * opened {boolean}: 모달 창 표시 여부
 * handleModal {function}: 모달 창 표시 상태 설정 함수
 * contents {object}: 모달 창 내용 객체 (없을 경우 모달 창의 자식 컴포넌트가 렌더링됨)
 * contents.title {string}: 모달 창 제목
 * contents.content {string}: 모달 창 내용
 * contents.subInfo {array}: 제목, 내용 외에 추가로 표시할 정보를 담은 객체 리스트
 * contents.subInfo[].key {string}: 추가로 표시할 정보의 key 값
 * contents.subInfo[].name {string}: 추가로 표시할 정보의 이름
 * contents.subInfo[].content {string}: 추가로 표시할 정보의 내용
 * contents.actions {array}: 하단 버튼의 정보를 담는 객체 리스트
 * contents.actions[].name {string}: 버튼에 표시되는 텍스트
 * contents.actions[].color {string}: 버튼 색상 (생략 시 기본 색상으로)
 * contents.actions[].action {function}: 버튼 클릭 시 호출되는 함수
 * locked {boolean}: true시 확인 버튼 삭제 & 오버레이 클릭 시 모달 종료 불가
 * scroll {boolean}: 세로 스크롤바 표시 여부
 */

import ModalPortal from './Portal';
import Button from './Button';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

// TODO: Sheet 컴포넌트로 교체
function ModalSection({ children, opened, handleModal, contents, locked, scroll }) {
  const closeModal = e => {
    const isClosable = [...e.target.classList].some(cls => cls === 'closable');
    if (opened && isClosable) handleModal();
  };

  return (
    <div className={`${classes.overlay} ${locked ? '' : 'closable'}`} onClick={closeModal}>
      <section className={classes.modal}>
        {contents ? (
          <>
            <header className={classes.modalHeader}>
              <h1 className="subtitle">{contents.title}</h1>
              {contents.subInfo && (
                <div className={classes.subInfo}>
                  {contents.subInfo.map(info => (
                    <div key={info.key}>
                      {info.name}: {info.content}
                    </div>
                  ))}
                </div>
              )}
            </header>
            <div className={`${classes.content} ${scroll ? classes.scroll : ''}`}>
              {contents.content}
            </div>
            <div className={classes.actionsContainer}>
              {locked || (
                <div className={classes.actions}>
                  {contents.actions ? (
                    contents.actions.map((btn, index) => (
                      <Button
                        key={index}
                        text={btn.name}
                        size="small"
                        color={btn.color}
                        onEvent={btn.action}
                        closable
                      />
                    ))
                  ) : (
                    <Button text="확인" size="small" onEvent={closeModal} closable />
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {children}
            <div className={classes.actionsContainer}>
              <div className={classes.actions}>
                <Button text="확인" size="small" onEvent={closeModal} closable />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default function Modal({ opened, ...rest }) {
  return <ModalPortal>{opened && <ModalSection opened={opened} {...rest} />}</ModalPortal>;
}

ModalSection.propTypes = {
  children: PropTypes.object,
  opened: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  contents: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.node,
    subInfo: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
        content: PropTypes.string,
      }),
    ),
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
        action: PropTypes.func,
      }),
    ),
  }),
  locked: PropTypes.bool,
  scroll: PropTypes.bool,
};

Modal.propTypes = {
  opened: PropTypes.bool.isRequired,
  rest: PropTypes.object,
};
