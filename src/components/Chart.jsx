import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Line } from "react-chartjs-2"

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  canvas {
    max-height: 99%;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
`

const Chart = () => {
  const [chartData, setChartData] = useState({})

  let dateYear = new Date().getFullYear()
  let dateMonth = new Date().getMonth() + 1
  let dateDay = new Date().getDate()

  const getMonthlyData = async () => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/country/spain?date_from=${dateYear}-${
        dateMonth - 1
      }-${dateDay}&date_to=${dateYear}-${dateMonth}-0${dateDay}`
    )
    const data = await res.json()
    console.log(data.dates)

    buildChart(data.dates)
  }

  const buildChart = (dataDates) => {
    const verticalMonthlyData = []
    const horizontalMonthlyData = []

    for (let dataDay in dataDates) {
      let dataSplitted = dataDay.split("-")
      verticalMonthlyData.push(dataSplitted[2])
      horizontalMonthlyData.push(
        dataDates[dataDay].countries.Spain.today_confirmed
      )
    }

    setChartData({
      labels: verticalMonthlyData.map((day) => day),
      datasets: [
        {
          label: "Spain",
          data: horizontalMonthlyData.map((day) => day),
          backgroundColor: "rgb(37, 125, 219,0.5)",
          borderColor: "rgb(37, 125, 219)",
          borderWidth: 3,
          pointBorderWidth: 1,
          pointBorderColor: "rgb(37, 125, 219)",
          pointBackgroundColor: "rgb(37, 125, 219,0.2)",
        },
      ],
    })
  }

  useEffect(() => {
    getMonthlyData()
  }, [])

  return (
    <>
      <ChartWrapper>
        <Line data={chartData} options={{ responsive: true }} />
      </ChartWrapper>
    </>
  )
}

export default Chart
