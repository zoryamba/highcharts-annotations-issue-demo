import React from 'react';

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Annotations from "highcharts/modules/annotations";

Annotations(Highcharts);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                series: [{
                    data: [
                        [0, 1],
                        [1, 2],
                        [2, 5],
                        [3, 2],
                        [4, 1],
                        [5, 3],
                        [6, 4],
                        [7, 4],
                        [8, 3],
                    ]
                }]
            },
        };
    }

    componentDidMount() {

        const annotations = [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 5,
                    y: 3,
                },
                text: "annotation",
            }]
        }];

        const yAxis = [{
            plotLines: [
                {
                    width: 2,
                    label: {
                        text: "plotline",
                    },
                    value: 3
                }
            ]
        }];


        this.setState({
            options: {
                yAxis: yAxis,
                annotations: annotations,
            }
        });
    }

    render() {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"chart"}
                    options={this.state.options}
                />
            </div>
        );
    }
}


export default App;
