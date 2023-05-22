export function Header ()
const title = "The pointing gentlemen" 
  return (
  <>
  <header class="main-header">
      <h1 class="main-title">{title}</h1>
    </header>
    <section class="controls">
      <p class="info">0 gentlemen pointing at you</p>
      <button class="button button--select">Select all</button>
    </section>
  </>
  );
);
  