const Paginator = ({ pages }) => {
  const pageNum = [];

  for (let i = 1; i < pages; i++) {
    pageNum.push(i);
  }

  return (
    <div className="paginator">
      {pageNum.map((num) => (
        <div key={num} onClick={() => console.log(num)}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default Paginator;
