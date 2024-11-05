type Props = {
  boardData: { value: number; today: number }[];
};

const Panel = ({ boardData }: Props) => {
  const summaryNames = {
    ongoing: { title: "모집중인 행사", unit: "개" },
    pending: { title: "승인 대기중인 행사", unit: "개" },
    editing: { title: "수정중인 행사", unit: "개" },
    total: { title: "누적 행사 수", unit: "건" },
  };

  return (
    <div className="dashboard_panel_wrap">
      <ul>
        {boardData &&
          Object.entries(boardData).map(([key, { value, today }]) => (
            <li key={key}>
              <div className="tit">{summaryNames[key].title}</div>
              <div className="num_wrap">
                <span className="num">{value}</span>
                <span>{summaryNames[key].unit}</span>
              </div>
              {today > 0 && <div className="increase">{`+${today}`}</div>}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Panel;
