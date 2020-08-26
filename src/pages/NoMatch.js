import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export const NoMatch = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <p
        style={{
          fontSize: '20rem',
          padding: '2rem',
          borderRight: 'solid black 3px',
          textShadow: '8px 7px 0px #5dabcd',
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        404
      </p>
      <div
        style={{
          padding: '1.5rem',
          fontSize: '1.7rem',
        }}
      >
        <h1
          style={{
            fontSize: '2em',
            textTransform: 'uppercase',
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          sorry !
        </h1>
        <p
          style={{
            fontSize: '1.2em',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          the page you're looking for <br /> was not found
        </p>
        <a
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '2rem',
            marginLeft: '1rem',
            fontSize: '1.2em',
            borderBottom: 'solid black 1px',
          }}
          href="/"
        >
          {' '}
          <IoIosArrowBack style={{ marginRight: '.2rem' }} />
          Go Back
        </a>
      </div>
    </div>
  );
};
