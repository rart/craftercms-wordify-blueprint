import React from 'react';
import Bio from '../components/Bio';
import { usePencil } from './hooks';

export default function (props) {
  const { bios } = props;
  return (
    <>
      {
        bios?.map(bio => <SidebarBio key={bio.craftercms.id} model={bio} />)
      }
    </>
  );
}

function SidebarBio(props) {
  const bio = props.model;
  const ice = usePencil(props);
  return (
    <div className="sidebar-box">
      <Bio ice={ice} model={bio} />
    </div>
  );
}
