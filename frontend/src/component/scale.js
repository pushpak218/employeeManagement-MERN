import React from 'react';
import { Line } from 'chart.js@^3.9.1';

const DataDetails2 = ({ sampleData }) => {
  // Extract timestamps and values from the sampleData prop
  const timestamps = sampleData.map(entry => entry.ts);
  const values = sampleData.map(entry => entry.machine_status);

  // Map values to colors
  const colors = values.map(value => {
    if (value === 0) return 'rgba(255, 255, 0, 0.5)'; // Yellow
    else if (value === 1) return 'rgba(0, 255, 0, 0.5)'; // Green
    else return 'rgba(255, 0, 0, 0.5)'; // Red for missing samples
  });

  // Create dataset for the chart
  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Sample Data',
        data: values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day', // Adjust based on your data
        },
        title: {
          display: true,
          text: 'Timestamp',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default DataDetails;
