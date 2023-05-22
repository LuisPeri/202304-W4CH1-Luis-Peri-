type PropsType = {
  label: string;
  user: string;
};

export function Header({ label, user }: PropsType) {
  const title = "hola mundo";
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{user}</p>
        <p>{label}</p>
      </header>
    </>
  );
}
