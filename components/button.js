import TestMd, * as rest from './testmd.mdx';

export default function Button({ children }) {
  return (
    <>
    <TestMd />
    布尔值显示{true}
    <br />
    <button
      style={{
        borderRadius: '3px',
        border: '1px solid black',
        color: 'black',
        padding: '0.5em 1em',
        cursor: 'pointer',
        fontSize: '1.1em',
      }}
    >
      {children}
    </button>
    </>
  )
}
