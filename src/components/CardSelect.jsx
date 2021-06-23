function CardSelect() {
  return (
    <div>
      <section className="main__table">
        <div className="main__table__date button button--radius button--desc">
          <p>15 июня, 13:00</p>
        </div>
        <div className="card card--table">
          <table>
            <tr>
              <td className="table__cell__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="a" cx="82.715%" cy="14.258%" fx="82.715%" fy="14.258%">
                      <stop offset="0%" stopColor="#777AB4" />
                      <stop offset="100%" stopColor="#777AB4" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="8.171%"
                      cy="-6.535%"
                      r="63.588%"
                      fx="8.171%"
                      fy="-6.535%">
                      <stop offset="0%" stopColor="#777AB4" />
                      <stop offset="100%" stopColor="#777AB4" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                  <g fill="none">
                    <path
                      fill="#F5F5F5"
                      d="M19 14c1.657 0 3-1.343 3-3s-1.343-3-3-3h-.031c.02-.164.031-.331.031-.5 0-2.209-1.791-4-4-4-1.75 0-3.238 1.124-3.78 2.689-.385-.123-.794-.189-1.22-.189-2.209 0-4 1.791-4 4s1.791 4 4 4c.345 0 .68-.044 1-.126v.126h8z"
                      opacity=".5"
                    />
                    <path
                      fill="#000"
                      fill-opacity=".02"
                      d="M6 19.5c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11zM6 19.75c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11zM6 20c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11z"
                    />
                    <path
                      fill="#000"
                      fill-opacity=".02"
                      fill-rule="nonzero"
                      d="M16.25 12.5c0-2.623-2.127-4.75-4.75-4.75-2.02 0-3.792 1.272-4.465 3.127-.335-.084-.682-.127-1.035-.127-2.347 0-4.25 1.903-4.25 4.25s1.903 4.25 4.25 4.25h11c1.795 0 3.25-1.455 3.25-3.25s-1.455-3.25-3.25-3.25c-.259 0-.515.03-.762.09l.012-.34z"
                    />
                    <path
                      fill="#FFF"
                      d="M6 19c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11z"
                    />
                    <circle cx="6" cy="15" r="4" fill="url(#a)" opacity=".24" />
                    <circle cx="17" cy="16" r="3" fill="url(#b)" opacity=".24" />
                    <circle cx="11.5" cy="12.5" r="4.5" fill="#FFF" />
                  </g>
                </svg>
              </td>
              <td className="table__cell__temp">+25&deg;</td>
              <td className="table__cell_explanation">Ощущается как, &deg;С</td>
              <td className="table__cell_explanation">Вероятность осадков, %</td>
              <td className="table__cell_explanation">
                Давление, <br />
                мм рт. ст.
              </td>
              <td className="table__cell_explanation">Ветер, м/с</td>
              <td className="table__cell_explanation">Влажность воздуха</td>
            </tr>
            <tr>
              <td colspan="2" className="table__cell__cloudy">
                Облачно с прояснениями
              </td>
              <td>+23&deg;</td>
              <td>93%</td>
              <td>756</td>
              <td>2,1</td>
              <td>81%</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CardSelect;