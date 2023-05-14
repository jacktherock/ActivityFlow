import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts"
import { Container, Spinner } from "react-bootstrap"

const Piechart = ({ tracks, loading }) => {
    const [activity, setActivity] = useState([]);
    const [duration, setDuration] = useState([]);

    useEffect(() => {
        const tempTrack = tracks;
        delete tempTrack.uid;
        delete tempTrack.date;

        const ac = Object.keys(tempTrack);
        const dc = Object.values(tempTrack);

        setActivity(ac);
        setDuration(dc);

    }, [tracks])


    return (
        <Container className="mb-5">
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                </div>
            ) : (
                <>
                    {(activity.length === 0) ? (
                        <div className="d-flex justify-content-center" >
                            <p className="shadow px-5 py-3 rounded-4 bg-danger text-white">No Data Available!</p>
                        </div>
                    ) : (
                        <>
                            
                            <Chart
                                type="donut"
                                width='100%'
                                height={450}
                                series={duration}
                                options={{
                                    //     title: {
                                    //         text: "Activity Tracks",
                                    //         align: 'left',
                                    //         margin: 20,
                                    //         offsetX: 50,
                                    //         offsetY: 20,
                                    //         floating: false,
                                    //         style: {
                                    //             fontSize: '30px',
                                    //             fontWeight: 'bold',
                                    //             fontFamily: 'Nunito, sans-serif',
                                    //             color: '#263238'
                                    //         },
                                    //     },
                                    // noData: {
                                    //     text: "No Data Available !",
                                    //     align: 'center',
                                    //     verticalAlign: 'middle',
                                    //     offsetX: 0,
                                    //     offsetY: 0,
                                    //     style: {
                                    //         color: "red",
                                    //         fontSize: '20px',
                                    //         fontFamily: 'Lexend, sans-serif',
                                    //     }
                                    // },
                                    labels: activity,
                                    legend: {
                                        show: true,
                                        showForSingleSeries: true,
                                        showForNullSeries: true,
                                        showForZeroSeries: true,
                                        position: 'bottom',
                                        horizontalAlign: 'left',
                                        floating: false,
                                        fontSize: '14px',
                                        fontFamily: 'lexend, sans-serif',
                                        fontWeight: 400,
                                        formatter: function (seriesName, opts) {
                                            return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
                                        },
                                        inverseOrder: false,
                                        width: undefined,
                                        height: undefined,
                                        tooltipHoverFormatter: undefined,
                                        customLegendItems: [],
                                        offsetX: 0,
                                        offsetY: 0,
                                        labels: {
                                            colors: undefined,
                                            useSeriesColors: false
                                        },
                                        markers: {
                                            width: 12,
                                            height: 12,
                                            strokeWidth: 0,
                                            strokeColor: '#fff',
                                            fillColors: undefined,
                                            radius: 12,
                                            customHTML: undefined,
                                            onClick: undefined,
                                            offsetX: 0,
                                            offsetY: 0
                                        },
                                        itemMargin: {
                                            horizontal: 5,
                                            vertical: 0
                                        },
                                        onItemClick: {
                                            toggleDataSeries: true
                                        },
                                        onItemHover: {
                                            highlightDataSeries: true
                                        },
                                    },
                                    dataLabels: {
                                        enabled: true,
                                        enabledOnSeries: undefined,
                                        // formatter: function (val, opts) {
                                        //     return val
                                        // },
                                        textAnchor: 'middle',
                                        distributed: false,
                                        offsetX: 0,
                                        offsetY: 0,
                                        style: {
                                            fontSize: '0.6rem',
                                            fontFamily: 'Nunito, sans-serif',
                                            colors: undefined
                                        },
                                        background: {
                                            enabled: true,
                                            foreColor: '#000',
                                            // padding: 4,
                                            borderRadius: 6,
                                            // borderWidth: 1,
                                            borderColor: '#fff',
                                            opacity: 0.9,
                                            dropShadow: {
                                                enabled: true,
                                                top: 1,
                                                left: 1,
                                                blur: 1,
                                                color: '#000',
                                                opacity: 0.45
                                            }
                                        },
                                        dropShadow: {
                                            enabled: false,
                                            top: 1,
                                            left: 1,
                                            blur: 1,
                                            color: '#000',
                                            opacity: 0.45
                                        }
                                    },
                                    plotOptions: {
                                        pie: {
                                            startAngle: 0,
                                            endAngle: 360,
                                            expandOnClick: true,
                                            offsetX: 0,
                                            offsetY: 0,
                                            customScale: 1,
                                            dataLabels: {
                                                offset: 0,
                                                minAngleToShowLabel: 5
                                            },
                                            donut: {
                                                size: '60%',
                                                background: 'transparent',
                                                labels: {
                                                    show: true,
                                                    name: {
                                                        show: true,
                                                        fontSize: '23px',
                                                        fontFamily: 'lexend, sans-serif',
                                                        fontWeight: 500,
                                                        color: undefined,
                                                        offsetY: -10,
                                                        formatter: function (val) {
                                                            return val
                                                        }
                                                    },
                                                    value: {
                                                        show: true,
                                                        fontSize: '17px',
                                                        fontFamily: 'lexend, sans-serif',
                                                        fontWeight: 400,
                                                        color: undefined,
                                                        offsetY: 16,
                                                        formatter: function (val) {
                                                            return val
                                                        }
                                                    },
                                                    total: {
                                                        show: true,
                                                        showAlways: false,
                                                        label: 'Total',
                                                        fontSize: '23px',
                                                        fontFamily: 'Lexend, sans-serif',
                                                        fontWeight: 500,
                                                        color: 'red',
                                                        formatter: function (w) {
                                                            return w.globals.seriesTotals.reduce((a, b) => {
                                                                return a + b
                                                            }, 0)
                                                        }
                                                    }
                                                }
                                            },
                                        }
                                    },
                                    responsive: [{
                                        breakpoint: 1000,
                                        options: {
                                            plotOptions: {
                                                donut: {
                                                    horizontal: false
                                                }
                                            },
                                            legend: {
                                                position: "bottom"
                                            },
                                            // title: {
                                            //     text: "User Activity Tracks",
                                            //     align: 'center',
                                            //     offsetX: 0,
                                            //     style: {
                                            //         fontSize: '14px',
                                            //         fontFamily: 'Lexend, sans-serif',
                                            //         fontWeight: 'bold',
                                            //         colors: undefined
                                            //     },
                                            // },
                                        }
                                    }],


                                }}
                            >
                            </Chart>
                        </>
                    )}
                </>
            )}
        </Container>
    )
}

export default Piechart