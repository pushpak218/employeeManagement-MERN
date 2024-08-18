import React from 'react';

function MachineStatusChart({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  const allTimestamps = data.map(item => new Date(item.ts).getTime()); 
  const minTimestamp = Math.min(...allTimestamps); 
  const maxTimestamp = Math.max(...allTimestamps); 
  const duration = maxTimestamp - minTimestamp; 

  const chartBars = [];

  let previousTimestamp = minTimestamp;
  data.forEach((item, index) => {
    const timestamp = new Date(item.ts).getTime();
    const position = ((timestamp - minTimestamp) / duration) * 100; 

    const color = item.machine_status === 0 ? 'yellow' : 'green';

    
    if (timestamp - previousTimestamp > 2 * 1000) { 
      const missingPosition = ((previousTimestamp + 1000 - minTimestamp) / duration) * 100; 
      chartBars.push(
        <div
          key={`missing-${index}`}
          style={{
            width: `${position - missingPosition}%`, 
            height: '20px', 
            backgroundColor: 'red',
            position: 'absolute',
            left: `${missingPosition}%`
          }}
          title={`Missing data between ${new Date(previousTimestamp).toISOString()} and ${item.ts}`}
        />
      );
    }

    chartBars.push(
      <div
        key={index}
        style={{
          width: '1px', 
          height: '20px', 
          backgroundColor: color,
          position: 'absolute',
          left: `${position}%`
        }}
        title={`Timestamp: ${item.ts}`}
      />
    );

    previousTimestamp = timestamp;
  });

  const intervalDuration = duration / 10; 
  const timeLabels = [];
  for (let i = 0; i <= 10; i++) {
    const intervalTimestamp = minTimestamp + (intervalDuration * i);
    const time = new Date(intervalTimestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    timeLabels.push(time);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', height: '20px', overflow: 'hidden' }}>
        {chartBars}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
        {timeLabels.map((label, index) => (
          <div key={index}>{label}</div>
        ))}
      </div>
    </div>
  );
}

export default MachineStatusChart;