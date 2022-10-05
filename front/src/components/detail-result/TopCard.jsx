import React from 'react';
import classes from './TopCard.module.css';
import { Link } from 'react-router-dom';

export default function TopCard({ data, user, addToCompare, removeFromCompare, selected }) {
  const valuelist = [1, 2, 3, 4, 5, 6, 7, 8];
  function prices(insure) {
    const pricess = valuelist.map(value =>
      insure.basic.filter(one => one.cover_type === value)[0]
        ? insure.basic.filter(one => one.cover_type === value)[0].price
        : insure.special && insure.special.filter(two => two.cover_type === value)[0]
        ? insure.special.filter(two => two.cover_type === value)[0].price
        : '-',
    );
    return pricess;
  }

  return (
    <div className={classes.card}>
      <div>
        <img className={classes.basiclogo} src={data.insurance.company_logo} alt="" />
      </div>
      <div className={classes.basicname}>{data.insurance.insurance_name}</div>
      <div className={classes.basiccontents}>
        <div className={classes.basicleft}>
          <div>통원치료비</div>
          <div>입원치료비</div>
          <div>수술치료비</div>
          <div>슬관절</div>
          <div>피부병</div>
          <div>구강</div>
          <div>비뇨기</div>
          <div>배상책임</div>
          <p style={{ color: '#F4AA41' }}>슈어 지수</p>
        </div>

        <div className={classes.basicright}>
          {prices(data).map((price, index) => (
            <div key={index}>
              {price === '-' ? (
                <div>{price}</div>
              ) : (
                <div>{(price * 10000).toLocaleString() + '원'}</div>
              )}
            </div>
          ))}
          <p style={{ color: '#F4AA41', fontWeight: '650', marginBottom: '20px' }}>
            상세 검색에서 보실 수 있어요!
          </p>
        </div>
      </div>
      <div className={classes.basicfee}>
        <p style={{ fontWeight: '700' }}>납입 보험료</p>
        <p style={{ fontWeight: '700', color: '#F4AA41' }}>
          {'월   ' + data.fee.toLocaleString() + '원'}
        </p>
      </div>
      <div className={classes.detailCompareButton}>
        <Link to={`${user}/${data.id}`} state={{ data }}>
          <button className={classes.detailButton}>상세보기</button>
        </Link>
        {selected && selected.some(el => el.id === data.id) ? (
          <button
            className={classes.removeButton}
            key={data.id}
            color="red"
            onClick={() => removeFromCompare(data)}
          >
            선택취소
          </button>
        ) : (
          <button
            className={classes.compareButton}
            key={data.id}
            color="blue"
            onClick={() => addToCompare(data)}
          >
            비교하기
          </button>
        )}
      </div>
      <div />
    </div>
  );
}
