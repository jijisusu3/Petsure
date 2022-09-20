import csv
import json

def cover_type():
    result = []
    with open('cover_type.csv', 'r', encoding='cp949') as file_csv:
      reader = csv.DictReader(file_csv)
      num = 0
      for v in reader:
        num += 1
        data = {}
        data['model'] = 'insurance.cover_type'
        data['pk'] = num
        data['fields'] = {}
        data['fields']['type'] = v['type']
        result.append(data)

def disease():
  result = []
  with open('disease.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      print(v)
      data['model'] = 'insurance.disease'
      data['pk'] = int(v['id'])
      data['fields'] = {}
      if v['type_id']:
        data['fields']['cover_type'] = int(v['type_id'])
      data['fields']['name'] = v['name']
      data['fields']['info'] = v['info']
      data['fields']['cause'] = v['cause']
      data['fields']['tip'] = v['tip']      
      result.append(data)
  return result

def breed():
  result = []
  with open('breed.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.breed'
      data['pk'] = int(v['breed_id'])
      data['fields'] = {}
      if v['disease']:
        data['fields']['disease'] = v['disease'].split(' ')
        for i in range(len(data['fields']['disease'])):
          data['fields']['disease'][i] = int(data['fields']['disease'][i])
      else:
        data['fields']['disease'] = []
      data['fields']['name'] = v['name']
      data['fields']['species'] = int(v['species'])
      if v['wild']:
        data['fields']['wild'] = True
      else:
        data['fields']['wild'] = False
      result.append(data)

  return result

def items():
  result = []
  with open('items.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.items'
      data['pk'] = int(v['id'])
      data['fields'] = {}
      data['fields']['name'] = v['name']
      data['fields']['price'] = int(v['price'])
      data['fields']['content'] = v['content']
      data['fields']['item_url'] = v['item_url']
      data['fields']['image'] = v['image']
      data['fields']['cover_type'] = int(v['cover_type'])
      result.append(data)

  return result


def insurance():
  result = []
  with open('insurance.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.Insurance'
      data['pk'] = int(v['id'])
      data['fields'] = {}
      data['fields']['company_name'] = v['company_name']
      data['fields']['insurance_name'] = v['insurance_name']
      data['fields']['species'] = int(v['species'])
      data['fields']['company_score'] = float(v['company_score'])
      data['fields']['company_url'] = v['company_url']
      data['fields']['company_logo'] = v['company_logo']
      if v['renewal']:
        data['fields']['renewal'] = True
      else:
        data['fields']['renewal'] = False
      data['fields']['payment_period'] = int(v['payment_period'])
      if v['content']:
        data['fields']['content'] = v['content']
      if v['etc']:
        data['fields']['etc'] = v['etc']
      data['fields']['price_score'] = float(v['price_score'])
      result.append(data)

  return result

def insurance_detail():
  result = []
  with open('insurance_detail.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.Insurance_detail'
      data['pk'] = int(v['id'])
      data['fields'] = {}

      data['fields']['insurance'] = int(v['insurance'])
      data['fields']['name'] = v['name']
      data['fields']['fee'] = int(v['fee'])

      if v['basic']:
        data['fields']['basic'] = v['basic'].split(' ')
        for i in range(len(data['fields']['basic'] )):
          data['fields']['basic'][i] = int(data['fields']['basic'][i])
      if v['special']:
        data['fields']['special'] = v['special'].split(' ')
        for i in range(len(data['fields']['special'] )):
          data['fields']['special'][i] = int(data['fields']['special'][i])
      if v['all_cover']:
        data['fields']['all_cover'] = v['all_cover'].split(' ')
        for i in range(len(data['fields']['all_cover'] )):
          data['fields']['all_cover'][i] = int(data['fields']['all_cover'][i])        
      data['fields']['content'] = v['content']

      result.append(data)

  return result

def cover():
  result = []
  with open('cover.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.Cover'
      data['pk'] = int(v['id'])
      data['fields'] = {}

      data['fields']['cover_type'] = int(v['cover_type'])
      data['fields']['insurance'] = int(v['insurance'])
      data['fields']['price'] = int(v['price'])
      if v['wild']:
        data['fields']['wild'] = True
      else:
        data['fields']['wild'] = False
      data['fields']['detail'] = v['detail']

      result.append(data)

  return result

def detail_user():
  result = []
  with open('detail_user.csv', 'r', encoding='cp949') as file_csv:
    reader = csv.DictReader(file_csv, delimiter="|")
    for v in reader:
      data = {}
      data['model'] = 'insurance.Detail_user'
      data['pk'] = int(v['id'])
      data['fields'] = {}
      data['fields']['breed'] = int(v['breed'])
      data['fields']['animal_name'] = v['animal_name']
      data['fields']['species'] = int(v['species'])
      data['fields']['animal_birth'] = int(v['animal_birth'])
      data['fields']['hospitalization'] = int(v['hospitalization'])
      data['fields']['outpatient'] = int(v['outpatient'])
      data['fields']['skin_disease'] = int(v['skin_disease'])
      data['fields']['operation'] = int(v['operation'])
      data['fields']['patella'] = int(v['patella'])
      data['fields']['dental'] = int(v['dental'])
      data['fields']['urinary'] = int(v['urinary'])
      data['fields']['liability'] = int(v['liability'])
      data['fields']['insurance_choice'] = int(v['insurance_choice'])
      result.append(data)

  return result
# result = cover_type()
# result = disease()
# result = breed()
# result = items()
# result = insurance()
# result = insurance_detail()
result = detail_user()


with open('detail_user.json', 'w',  encoding='cp949') as file_json:
    json.dump(result, file_json, indent=4, ensure_ascii = False)   