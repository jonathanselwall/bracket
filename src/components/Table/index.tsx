import styled from 'styled-components'

export const TableHeader = styled.thead`
  display: block;

  tr {
    background-color: transparent;
  }

  th {
    display: flex;
    margin-bottom: var(--spacing-small);
    text-align: center;
    justify-content: center;
    padding-right: var(--spacing-large);
  }
`
export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`

export const Row = styled.tr`
  display: grid;
  border-spacing: 0;
  width: 100%;
  grid-template-columns: minmax(250px, 1fr) 150px 150px 150px;
  grid-gap: var(--spacing-small);
  background-color: var(--color-bg-number-input);
  margin-bottom: var(--spacing-medium);
`
export const Column = styled.td`
  display: flex;
`

export const Table = styled.table`
  display: block;
  width: 100%;
  padding: var(--spacing-large);

  color: var(--color-white);

  ${TableHeader}, ${TableBody} {
    th {
      &:first-child {
        text-align: left;
        justify-content: flex-start;
      }
    }
  }
`
