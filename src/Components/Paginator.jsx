const Paginator = ({ pages }) => {
  const pageNum = [];

  for (let i = 1; i < pages; i++) {
    pageNum.push(i);
    if (pageNum.length > 9) break;
  }

  return (
    <div className="paginator">
      {pageNum.map((num) => (
        <div key={num} onClick={() => console.log(num)} className="pageNum">
          {num}
        </div>
      ))}
    </div>
  );
};

export default Paginator;
