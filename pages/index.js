function Title(props) {
  const Tag = props.tag
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  )
}

function HomePage() {
  return (
    <div>
      <Title tag="h2">Welcome to Next.js! Title</Title>
      <h2>Welcome to Next.js! H2</h2>
    </div>
  )
}

export default HomePage