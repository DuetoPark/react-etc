import React from 'react';

export default function LayoutHeader({menu}) {
  return (
    <header className='global_header'>
      <h1>
        <a href="/">코딩 오마카세</a>
      </h1>

      <ul>
        {menu.map(_menu => 
          <li key={_menu}>
            <a href={`/${_menu}`}>{_menu}</a>
          </li>
        )}
      </ul>
    </header>
  );
}

