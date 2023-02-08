import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
}

const EPSButton: React.FunctionComponent<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default EPSButton;
