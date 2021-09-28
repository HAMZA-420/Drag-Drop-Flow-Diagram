import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode solar" onDragStart={(event) => onDragStart(event, 'solar')} draggable>
        Solar
      </div>
      <div className="dndnode grid" onDragStart={(event) => onDragStart(event, 'grid')} draggable>
        Grids
      </div>
      <div className="dndnode generator" onDragStart={(event) => onDragStart(event, 'generator')} draggable>
        Generator
      </div>
      <div className="dndnode devices" onDragStart={(event) => onDragStart(event, 'devices')} draggable>
      Devices
      </div>
      <div className="dndnode bulb" onDragStart={(event) => onDragStart(event, 'bulb')} draggable>
        Bulb
      </div>
      <div className="dndnode battery" onDragStart={(event) => onDragStart(event, 'battery')} draggable>
        Battery
      </div>
    </aside>
  );
};