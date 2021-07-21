// PART 1
// Section 5
// Given the URL structure of /[retailerType]/[wmid]
// parse the wmid from the url and pass it to the useRetailer hook

// PART 4
// Finish the retailers page to responsively display:
// Feel free to render information that you would find useful when researching a retailer
// Feel free to style the page as you see fit so that it looks nice on mobile
// Be sure to include name, stars, and hours at minimum

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import parse from "html-react-parser";

import DefaultTemplate from "../templates/default";
import useRetailer from "../hooks/use-retailer";
import Stars from "../components/stars";
import styled, { StyledComponent } from "styled-components";
import HoursOfBusiness from "../components/hours";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  openDescription: {
    height: "auto",
  },
  closedDescription: {
    height: 200,
    overflow: "hidden",
    transition: "max-height 0.2s ease",
  },
});

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
const BusinessNameWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>``;

function Retailer() {
  const classes = useStyles();
  const { wmid } = useParams<{ wmid: string }>();
  const { data, isLoading, isError } = useRetailer(wmid);
  const { rating = 0, name = "", business_hours = {} } = data?.listing || {};
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <DefaultTemplate>
      {isError && <div> {isError} </div>}
      {isLoading && <div>loading</div>}
      {data && (
        <div className={classes.container}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={data.listing.avatar_image.small_url}
                title={data.listing.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <BusinessName name={name} />
                </Typography>
                <Stars rating={rating} />
                {business_hours && (
                  <HoursOfBusiness businessHours={business_hours} />
                )}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={
                    openDescription
                      ? classes.openDescription
                      : classes.closedDescription
                  }
                >
                  {data && parse(data.listing.description)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  href={data.listing.web_url}
                  target="_blank"
                  rel="noopener"
                >
                  Learn More
                </Link>
              </Button>
              {openDescription ? (
                <IconButton
                  onClick={() => setOpenDescription(!openDescription)}
                >
                  <ExpandLessIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => setOpenDescription(!openDescription)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </CardActions>
          </Card>
        </div>
      )}
      {/* <Stars rating={rating} /> */}
    </DefaultTemplate>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function BusinessName({ name }: { name: string }) {
  return (
    <BusinessNameWrapper data-testid="business-name">
      {name}
    </BusinessNameWrapper>
  );
}

export default Retailer;
