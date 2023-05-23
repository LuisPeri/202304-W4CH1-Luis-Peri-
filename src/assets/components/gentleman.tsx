import { Mock } from "../../mocks/Mock";

export function Info(
  Id: number,
  Name: string,
  Status: boolean,
  Profession: string,
  Twitter: string,
  Picture: string,
  AlternativeText: string,
  Selected: boolean
) {
  return (
    <>
      <li className="gentleman">
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src="img/bertin.jpg"
            alt="Bertin Osbourne pointing at you"
          />
          <span className="gentleman__initial">B</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">Bertin Osbourne</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              Java developer
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span> Alive
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span> @osbourne
            </li>
          </ul>
        </div>
        <i className="icon gentleman__icon fas fa-check"></i>
        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
      </li>
    </>
  );
}
