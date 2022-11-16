/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (t) => {
    all.push(t);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  let today = new Date().toLocaleDateString("en-CA");
  const overdue = () => {
    return all.filter((t) => {
      return t.dueDate < today;
    });
  };
  const dueToday = () => {
    return all.filter((t) => {
      return t.dueDate === today;
    });
  };
  const dueLater = () => {
    return all.filter((t) => {
      return t.dueDate > today;
    });
  };
  const toDisplayableList = (list) => {
    return list
      .map((t) => {
        dstatus = t.completed ? "[x]" : "[ ]";
        ddate = t.dueDate == today ? "" : t.dueDate;
        return `${dstatus} ${t.title} ${ddate}`;
      })
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
