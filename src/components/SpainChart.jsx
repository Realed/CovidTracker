import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Line } from "react-chartjs-2"

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 75px;
    max-height: 75px;
  }

  h1 {
    color: #444;
    font-weight: 500;
    font-size: 1em;
  }

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
  const [isLoading, setIsLoading] = useState(true)

  let dateYear = new Date().getFullYear().toString()
  let dateMonth = (new Date().getMonth() + 1).toString()
  let dateDay = new Date().getDate().toString()

  const getDatesAndRender = () => {
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let day = dateDay

    if (dateMonth.length === 1) {
      dateMonth = "0" + dateMonth
    }
    if (dateDay.length === 1) {
      dateDay = "0" + dateDay
    }

    if (month === 0) {
      month = 12
      year = year - 1
    }

    const fullDate = `${dateYear}-${dateMonth}-${dateDay}`
    const previousFullDate = `${year}-${month}-${day}`

    getMonthlyData(fullDate, previousFullDate)
  }

  const getMonthlyData = async (fullDate, previousFullDate) => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/country/spain?date_from=${previousFullDate}&date_to=${fullDate}`
    )
    const data = await res.json()
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
      setIsLoading(false)
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
    getDatesAndRender()
  }, [])

  return (
    <>
      <ChartWrapper className="queso">
        {isLoading && (
          <img
            src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
            alt="loading-gif"
          />
        )}
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && <Line data={chartData} options={{ responsive: true }} />}
      </ChartWrapper>
    </>
  )
}

export default Chart
