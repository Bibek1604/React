// User.js
import React from 'react';

function User({ name, study }) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{study}</h1>
    </>
  );
}

export default User;
