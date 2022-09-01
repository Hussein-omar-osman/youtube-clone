const viewCount = (views) => {
  let arr_num = Array.from(views?.toString()).map(Number);
  if (arr_num.length < 4) {
    return `${views} views`;
  }
  let modu_arr = arr_num.length % 3;
  if (modu_arr === 0) {
    let new_arr = arr_num.length / 3;
    if (new_arr === 1) {
      return `${views} views`;
    } else if (new_arr === 2) {
      let final = arr_num.splice(0, 3).join('');
      return `${final}K views`;
    } else if (new_arr === 3) {
      let final = arr_num.splice(0, 3).join('');

      return `${final}M views`;
    } else if (new_arr === 4) {
      let final = arr_num.splice(0, 3).join('');
      return `${final}B views`;
    }
  } else {
    let oddOnes = arr_num.splice(0, modu_arr).join('');
    let reminder_len = arr_num.length;
    if (reminder_len === 3) {
      let final = `${oddOnes}K views`;
      return final;
    } else if (reminder_len === 6) {
      let final = `${oddOnes}M views`;
      return final;
    } else if (reminder_len === 9) {
      let final = `${oddOnes}B views`;
      return final;
    }
  }
};

// viewCount(123489);
// viewCount(12);
// viewCount(12348945);
// viewCount(1234895);
// viewCount(1234894567);

export default viewCount;
