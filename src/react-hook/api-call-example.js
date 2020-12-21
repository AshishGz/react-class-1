import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import axios from 'axios';
import {CircularProgress} from "@material-ui/core";

export default function ApiCallExampleHook() {


    const [pageState,setPageState]=useState({loading:true,error:false,pageDate:[]});

    useEffect(()=>{
        getNewDataFromAPI();
    },[true]);


    function getNewDataFromAPI(){
        axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=9b017d9c85e140f58bd094de3f1b99d3').then(function (response) {
            pageState.pageDate=response.data.articles;
            pageState.loading=false;
            setPageState({...pageState,pageState});
        }).catch(function (er) {
            pageState.error=true;
            setPageState({...pageState,pageState});
        })
    }

    return (
        <div style={{margin:20}}>
            {pageState.loading ? <CircularProgress/> :
                <Grid container spacing={2}>
                    {pageState.pageDate.map((item)=>
                        <Grid item xs="12" sm="6">
                            <a target="_blank" href={item.url} style={{textDecoration:'none'}}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title={item.title}
                                    subheader={new Date(item.publishedAt).toLocaleString()}
                                />
                                <CardMedia
                                    style={{height: 0,
                                        paddingTop: '56.25%', }}
                                    image={item.urlToImage}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </a>
                        </Grid>
                    )}

                </Grid>
            }
        </div>
    )

}
