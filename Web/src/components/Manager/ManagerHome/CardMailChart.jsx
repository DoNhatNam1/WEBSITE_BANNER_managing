import React, { useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const CardMailChart = () => {
  // const [isShown, setIsShown] = useState(false);

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, argsm, pluginOptions){
      const {ctx, data} = chart;

      ctx.save()
      ctx.font = 'bolder 30px sans-serif'
      ctx.fillStyle = 'rgb(135, 180, 45)'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'middle'
      ctx.fillText(`Tổng: ${data.datasets[0].data[0] + data.datasets[0].data[1]}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  const data = {
    labels: ['Email chưa đọc', 'Email đã đọc'],
    datasets: [{
      label: 'Tin nhắn',
      data: [34, 67],
      backgroundColor: [
        '#A60000',
        'rgb(13, 157, 157)',
      ],
      borderColor: ['#A60000', 'rgb(13, 157, 157)'],
    }]
  }

  return (
    <div style={{width: '80%', height: '80%'}}>
      <Doughnut
      data={data}
      plugins={[textCenter]}
      >
        
      </Doughnut>
    </div>
  )
}

export default CardMailChart