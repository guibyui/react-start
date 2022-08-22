import React from "react";

const Container = (props) => {
  return (
    <div>
      <nav className="flex items-center justify-center bg-slate-400 h-12">
        <h1>{props.title}</h1>
      </nav>
      <main>{props.children}</main>
    </div>
  );
};

export default Container;
