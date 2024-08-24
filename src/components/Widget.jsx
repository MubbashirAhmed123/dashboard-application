import React, { useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Widget = ({ categoryId, widget, removeWidget }) => {
  const [chartData, setChartData] = useState({
    cloudAccounts: [55, 25, 20],
    riskAssessment: [65, 59, 80, 81, 56, 55],
    namespaceAlerts: [30, 20, 25, 15, 10],
    workloadAlerts: [12, 19, 3, 5],
    imageRisk: [40, 30, 30],
    securityIssues: [12, 19, 11, 5, 9],
  });

  const renderChart = () => {
    const commonChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    switch (widget.id) {
      case 1:
        return (
          <Doughnut
            data={{
              labels: ['AWS', 'Azure', 'Google Cloud'],
              datasets: [
                {
                  data: chartData.cloudAccounts,
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
            options={commonChartOptions}
          />
        );

      case 2:
        return (
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Risk Level',
                  data: chartData.riskAssessment,
                  borderColor: 'rgba(75,192,192,1)',
                  fill: false,
                },
              ],
            }}
            options={commonChartOptions}
          />
        );

      case 3:
        return (
          <Doughnut
            data={{
              labels: ['AWS', 'Azure', 'Google Cloud', 'Khan Baba', 'Cloud Fare'],
              datasets: [
                {
                  data: chartData.namespaceAlerts,
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'purple', 'gray'],
                },
              ],
            }}
            options={commonChartOptions}
          />
        );

      case 4:
        return (
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Work Load Alerts',
                  data: chartData.workloadAlerts,
                  borderColor: 'rgba(75,192,192,1)',
                  fill: false,
                },
              ],
            }}
            options={commonChartOptions}
          />
        );

      case 5:
        return (
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Image Risk Assessment',
                  data: chartData.imageRisk,
                  borderColor: 'rgba(75,192,192,1)',
                  fill: false,
                },
              ],
            }}
            options={commonChartOptions}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-sm md:text-lg font-medium">{widget.name}</h3>
        <button
          onClick={() => removeWidget(categoryId, widget.id)}
          className="text-red-500 hover:text-red-700"
        >
          &times;
        </button>
      </div>
      <p className="text-xs md:text-sm text-gray-600 mt-2">{widget.content}</p>
      <div className="h-40 md:h-64 mt-4">
        {renderChart()}
      </div>
    </div>
  );
};

export default Widget;
