import {
    TableWrapper,
    TableTittle,
    TableTittleBtn,
    TableContentList,
    TableContentItem,
    ItemCategoryWrapper,
    CategoryColorMark,
    CategoryName,
    ItemSum,
    TableResultList,
    TableResultItem,
    ResultItemTittle,
    ResultItemValue,
  } from './StatisticTable.styled';
  import { useState, useEffect } from 'react';
  import { sumConverter } from "helpers";

  export const Table = ({ dataToProps: {tableCategories, tableExpenseSum, tableIncomeSum} }) => {

    const [dataToRender, setDataToRender] = useState('');
  
    const [categorySortedStatus, setCategorySortedStatus] = useState('');
    const [sumSortedStatus, setSumSortedStatus] = useState('');
  

  
    useEffect(() => {
      if (tableCategories.length === 0) {
        setDataToRender('')
        return;
      }
      setDataToRender(tableCategories);
    }, [tableCategories]);
  
    function sortByCategory() {
      if (categorySortedStatus === '' || categorySortedStatus === 'ZA') {
        const sortedData = [...tableCategories].sort(
          (firstCategory, secondCategory) =>
            firstCategory.categoryName.localeCompare(secondCategory.categoryName)
        );
        setCategorySortedStatus('AZ');
        setSumSortedStatus('');
  
        setDataToRender(sortedData);
      }
      if (categorySortedStatus === 'AZ') {
        const sortedData = [...tableCategories].sort(
          (firstCategory, secondCategory) =>
            secondCategory.categoryName.localeCompare(firstCategory.categoryName)
        );
        setCategorySortedStatus('ZA');
        //setSumSortedStatus('');
  
        setDataToRender(sortedData);
      }
    }
  
    function sortHelper(method) {
      switch (method) {
        case 'ascending':
          return [...dataToRender].sort((a, b) => a.categorySum - b.categorySum);
  
        case 'descending':
          return [...dataToRender].sort((a, b) => b.categorySum - a.categorySum);
  
        default:
          console.log('incorrect method');
      }
    }
  
    function sortBySum() {
      let sortedResult = null;
  
      switch (sumSortedStatus) {
        case '':
          sortedResult = sortHelper('ascending');
          setSumSortedStatus('increment');
          setCategorySortedStatus('');
          break;
  
        case 'decrement':
          sortedResult = sortHelper('ascending');
          setSumSortedStatus('increment');
          setCategorySortedStatus('');
          break;
  
        case 'increment':
          sortedResult = sortHelper('descending');
          setSumSortedStatus('decrement');
          break;
  
        default:
          console.log('error');
      }
  
      setDataToRender(sortedResult);
    }
  
    
  
    return (
      <>
        <TableWrapper className="table-wrapper">
          <TableTittle className="table-tittle">
            <TableTittleBtn className="table-tittle-btn" onClick={sortByCategory}>
              Category
            </TableTittleBtn>
            <TableTittleBtn className="table-tittle-btn" onClick={sortBySum}>
              Sum
            </TableTittleBtn>
          </TableTittle>
  
          <TableContentList className="table-content-list">
            {dataToRender.length !== 0 &&
              dataToRender.map(({ categoryColor, categoryName, categorySum }) => {
                return (
                  <TableContentItem
                    className="table-content-item"
                    key={categoryName}
                  >
                    <ItemCategoryWrapper className="item-category-wrapper">
                      <CategoryColorMark
                        background={categoryColor}
                      ></CategoryColorMark>
                      <CategoryName className="category-name">
                        {categoryName}
                      </CategoryName>
                    </ItemCategoryWrapper>
                    <ItemSum>{sumConverter(categorySum)}</ItemSum>
                  </TableContentItem>
                );
              })}
          </TableContentList>
  
          <TableResultList className="table-result-list">
            <TableResultItem className="table-result-item">
              <ResultItemTittle className="result-item-tittle">
                Expenses:
              </ResultItemTittle>
              <ResultItemValue
                className="result-item-value"
                color={'var(--pink)'}
              >
                {tableExpenseSum}
              </ResultItemValue>
            </TableResultItem>
  
            <TableResultItem className="table-result-item">
              <ResultItemTittle className="result-item-tittle">
                Income:
              </ResultItemTittle>
              <ResultItemValue
                className="result-item-value"
                color={'var(--green)'}
              >
                {tableIncomeSum}
              </ResultItemValue>
            </TableResultItem>
          </TableResultList>
        </TableWrapper>
      </>
    );
  };