import './ResultsList.css';
import ResultItem from '../ResultItem/ResultItem'

function ResultsList({data}) {

  return (
    <div className="results-list">
      {data.map((item,i) => (
        <ResultItem
            item={item}
            key={i}
      />))}

    </div>
  );
}

export default ResultsList;