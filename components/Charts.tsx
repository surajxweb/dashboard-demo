"use client";
import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
import { registerables } from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Charts.module.css";

const Charts = ({ data }: { data: any }) => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleDateChange = (date: Date | null, type: string) => {
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }

    setFilteredData((prevData: any) => {
      const filtered = prevData.filter((dataItem: any) => {
        const dataDate = new Date(dataItem.Day);
        return (
          (!startDate || dataDate >= startDate) &&
          (!endDate || dataDate <= endDate)
        );
      });
      // Do something with the filtered data if needed
      console.log(filtered);
      return filtered;
    });
  };

  Chart.register(CategoryScale);
  Chart.register(...registerables);

  useEffect(() => {
    console.log(selectedLabel);
  }, [selectedLabel]);

  const handleBarClick = (event: any) => {
    console.log("Apna time shhuru!");
    console.log(event[0]?.index);
    
    
    const activeElement = event[0];

    if (activeElement && activeElement._model && activeElement._model.label) {
      const clickedLabel = activeElement._model.label;
      setSelectedLabel((prevLabel) => {
        // Use the state updater function to ensure you're working with the latest state
        return clickedLabel;
      });
    }
  };

  const barChartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Labels",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Time Spent",
        },
      },
    },
    onClick: (event : any, elements : any) => {
      
        handleBarClick(elements);
    
    },
  };

  const totalTimeSpentOnA = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.A;
    },
    0
  );
  const totalTimeSpentOnB = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.B;
    },
    0
  );
  const totalTimeSpentOnC = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.C;
    },
    0
  );
  const totalTimeSpentOnD = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.D;
    },
    0
  );
  const totalTimeSpentOnE = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.E;
    },
    0
  );
  const totalTimeSpentOnF = filteredData.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.F;
    },
    0
  );

  return (
    <>
      <div className={styles.datepicker}>
        <div className={styles.startDate}>
          <label>Select Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => handleDateChange(date, "start")}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
          />
        </div>
        <div className={styles.endDate}>
          <label>Select End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date: any) => handleDateChange(date, "end")}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            minDate={startDate}
          />
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart1}>
          <Bar
            datasetIdKey="id"
            data={{
              labels: ["A", "B", "C", "D", "E", "F"],
              datasets: [
                {
                  label: "Total Time Spent",
                  data: [
                    totalTimeSpentOnA,
                    totalTimeSpentOnB,
                    totalTimeSpentOnC,
                    totalTimeSpentOnD,
                    totalTimeSpentOnE,
                    totalTimeSpentOnF,
                  ],
                },
              ],
            }}
            options={barChartOptions}
          />
        </div>
        <div className={styles.chart2}>
          <Line
            datasetIdKey="id"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  label: "",
                  data: [5, 6, 7],
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Charts;
