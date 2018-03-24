window.onload = function() {
    /*空心饼状图1*/
    var myChart = echarts.init(document.getElementById('main1'));
    var app = {};
    app.title = '环形图';
    option = {
        title:{
            text:'2,124',
            subtext:'APPLICANTS',
            subtextStyle:{
                color:'#262b2e',
                fontSize:'10',
                fontWeight:'300'
            },
            itemGap:5,
            x:'center',
            y:'80'
        },
        legend: {
            orient: 'horizontal',
            x: 'left'
        },
        color: ['#58d24a', '#f5f8f9'],
        series: [
            {
                type: 'pie',
                radius: ['50%', '60%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 7.5},
                    {value: 2.5}
                ]
            }
        ],
        hoverAnimation: 'false',
        silent: 'true',
        label: {
            normal: {
                show: 'true',
                position: 'center'
            }
        }
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    /*空心饼状图2*/
    var myChart = echarts.init(document.getElementById('main2'));
    var app = {};
    option = null;
    app.title = '环形图';
    option = {
        title:{
            text:'1,467',
            subtext:'INTERVIEWS',
            subtextStyle:{
                color:'#262b2e',
                fontSize:'10',
                fontWeight:'300'
            },
            itemGap:5,
            x:'center',
            y:'80'
        },
        legend: {
            orient: 'horizontal',
            x: 'left'
        },
        color: ['#55a4e3', '#f5f8f9'],
        series: [
            {
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 7.5},
                    {value: 2.5}
                ]
            }
        ],
        hoverAnimation: 'false',
        silent: 'true',
        label: {
            normal: {
                show: 'true',
                position: 'center',
            }
        },
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    /*空心饼状图3*/
    var myChart = echarts.init(document.getElementById('main3'))
    var app = {}
    option = null;
    app.title = '环形图';
    option = {
        title:{
            text:'296',
            subtext:'FORWARDS',
            subtextStyle:{
                color:'#262b2e',
                fontSize:'10',
                fontWeight:'300'
            },
            itemGap:5,
            x:'center',
            y:'80'
        },
        legend: {
            orient: 'horizontal',
            x: 'left'
        },
        color: ['#febb42', '#f5f8f9'],
        series: [
            {
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 7.5},
                    {value: 2.5}
                ]
            }
        ],
        hoverAnimation: 'false',
        silent: 'true',
        label: {
            normal: {
                show: 'true',
                position: 'center',
            }
        },
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    /*垂直柱状图*/
    var myChart = echarts.init(document.getElementById('main4'));
    var option = {
        title: {
            show: "true",
            subtext: "Applicants a Day",
            itemGap: 188,
            textStyle: {
                color: '#262b2e',
                fontSize: '18',
                fontWeight: '300'
            }
        },
        tooltip: {},
        xAxis: {
            data: ["", "", "", "", "", "", "", "", "", "", ""],
            splitLine:{show:false},
            axisTick:{show:false},
            axisLine:{show:false}


        },
        yAxis: {
            type:'value',
            splitNumber:1,
            scale:true,
            axisLine:{show:false},
            axisTick:{show:false},
            splitLine:{show:true},
            max:'100'
        },
        series: [{
            name: '销量',
            type: 'bar',
            barWidth: 10,
            data: [125, 80, 125, 140, 125, 70, 48, 125, 48, 80]
        }],
        grid: {
            left: '5%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        color: '#5bd24c',
        hoverAnimation: 'false',
        silent: 'true',
        label: {
            normal: {
                show: 'true',
                position: 'center'
            }
        },

    }
    myChart.setOption(option);

    /*实心饼状图*/
    var myChart = echarts.init(document.getElementById('main5'));
    myChart.setOption({
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 69.6, name: '69.6%'},
                    {value: 30.4, name: ''}
                ],
                color: ['#58d24c', '#f5f8f9'],
                hoverAnimation: 'false',
                silent: 'true',
                label: {
                    normal: {
                        show: 'true',
                        position: 'inner'
                    }
                }
            }
        ]
    })

    /*水平柱状图*/
    var dom = document.getElementById("main6");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: 'Market Value',
            subtext: '$20,467',
            textStyle:{
                 fontSize:15,
                 color:'#262b2e',
                 fontWeight:300
            },
            subtextStyle:{
                 fontWeight:900,
                 fontSize:20,
                 color:'#262b2e'
            }
        },
        barWidth:'5',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Day', 'Night'],
            top:270,
            right:10,
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{show:false},
            splitLine:{show:false},
            axisTick:{show:false},
            axisLabel:{
                formatter:function(){
                    return "";
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['March', 'April', 'May', 'June', 'July'],
            axisTick:{show:false},
            axisLine:{show:false}
        },
        series: [
            {
                name: 'Day',
                type: 'bar',
                data: [20, 15, 12, 15, 20]
            },
            {
                name: 'Night',
                type: 'bar',
                data: [17, 18, 14, 10, 16]
            }
        ],
        color: ['#66a4e3', '#58d24c']
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    /*水平折线图*/
    var dom = document.getElementById("three1");
    var myChart = echarts.init(dom);
    option = {
        title: {
            show: "true",
            text: "25,134",
            itemGap:10,
            x:'center',
            textStyle: {
                color:'#262b2e',
                fontSize:25,
                fontWeight:600

            },
            subtext:'FOLLOWERS',
            subtextStyle:{
                 color: '#262b2e',
                fontWeight: '300'
            }
        },
        xAxis: {
            type: 'category',
            data: ['JUNE 20', '', 'JULY 15', '', 'AUGUST 3'],
            axisTick:{show:false},
            axisLine:{show:false}

        },
        yAxis: {
            type: 'value',
            splitNumber: 2,
            scale: true,
            axisLine:{show:false},
            splitLine:{show:true},
            axisTick:{show:false},
            axisLabel:{
                formatter:function(){
                    return "";
                }
            }
        },
        series: [{
            symbol:'none',
            data: [20, 30, 31, 35, 36],
            type: 'line'
        }],
        color: ['#66a4e3']
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}