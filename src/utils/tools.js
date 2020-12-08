// 列表删除数据后获取当前分页
// 比如第 4 页有 10 条数据 删除 1 条后返回 4
// 比如第 4 页有 1 条数据 删除 1 条后返回 3
export function getDeletedPageIndex(pager) {
  const { pageIndex, currPageRows } = pager;
  let result = 1;
  if (currPageRows <= 1) {
    if (pageIndex > 1) {
      result = pageIndex - 1;
    }
  } else {
    result = pageIndex;
  }
  return result;
}

export function getBirthdayFromCard(cardNum) {
  let len = cardNum && cardNum.length,
    temp = "",
    result = "";
  if (len === 15) {
    temp = "19" + cardNum.slice(6, 12);
  } else if (len === 18) {
    temp = cardNum.slice(6, 14);
  } else {
    console.log("身份证格式输入有误");
  }

  result = temp.slice(0, 4) + "-" + temp.slice(4, 6) + "-" + temp.slice(6);

  return result;
}

export function getFullAge(birthDays) {
  // 获得周岁日期
  let returnAge;
  let strBirthdayArr = new Date(birthDays),
    birthYear = strBirthdayArr.getFullYear(),
    birthMonth = strBirthdayArr.getMonth() + 1,
    birthDay = strBirthdayArr.getDate(),
    d = new Date(),
    nowYear = d.getFullYear(),
    nowMonth = d.getMonth() + 1,
    nowDay = d.getDate();

  if (nowYear === birthYear) {
    returnAge = 0; //同年 则为0周岁
  } else {
    let ageDiff = nowYear - birthYear; //年之差
    if (ageDiff > 0) {
      if (nowMonth === birthMonth) {
        let dayDiff = nowDay - birthDay; //日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      } else {
        let monthDiff = nowMonth - birthMonth; //月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge; //返回周岁年龄
}
