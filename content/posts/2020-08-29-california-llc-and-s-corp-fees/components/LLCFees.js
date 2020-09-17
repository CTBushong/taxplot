import React from 'react';
import { VictoryChart, VictoryLine } from "victory";
import {incometax} from "../../../../tax-calc";


function LLCFees() {
  const incomeTax = (data) => {
    return incometax(data.x)
  }
  return (
      <VictoryChart>
        <VictoryLine
          domain={{x: [0, 200000]}}
          samples={100}
          style={{data:
            {stroke: "blue", strokeWidth: 2}
          }}
          animate={{
            duration: 2000
          }}
          y={(data) => incomeTax(data)}
        />
    </VictoryChart>
    )
  }

export default LLCFees;