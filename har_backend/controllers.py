from datetime import datetime
from typing import Union
from .config import db


def get_activity_by_user(date: Union[datetime, str], user: dict):
    print(f"date: {date}")
    activity_list = []
    y,m,d = datetime.now().strftime("%Y-%m-%d").split('-')
    if date:
        y,m,d = date.split('-')
    dt = datetime(int(y),int(m),int(d),0,0,0,0)
    end_dt = datetime(int(y),int(m),int(d),23,59,59,999)
    doc_ref = db.collection('userActivityData').where('date', ">=", dt).where('date', "<=", end_dt)
    docs = doc_ref.stream()
    overall_stats = {
        "Downstrairs": 0,
        "Jogging": 0,
        "Running": 0,
        "Sitting": 0,
        "Standing": 0,
        "Upstairs": 0,
        "Walking": 0,
    }
    for x in docs:
        serialized_data = x.to_dict()
        for x in overall_stats.keys():
            overall_stats[x] += serialized_data[x]
        activity_list.append(serialized_data)
    return {"all_activity_for_date" :activity_list, "overall_stats": overall_stats}


def update_user_data(user, req_data) -> dict:
    for field in list(req_data.keys()):
        if field not in ['uid', 'gender', 'userHeight', 'weight', 'username', 'age', 'date']:
            req_data.pop(field, None)
    user.update(req_data)
    db_query = db.collection('userBioData').document(user['uid'])
    db_query.set(user)
    user = db_query.get()
    return user.to_dict()

