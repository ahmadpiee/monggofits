import React from "react"
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core"

import { Layout } from "@components/ui"
import { ExpandMoreIcon } from "@components/Icons"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: "100%",
    minHeight: "65vh",
    marginBottom: "2rem",
  },
  accordionContainer: {
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 30rem",
    [theme.breakpoints.down("lg")]: {
      padding: "0 20rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 10rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 3.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
    },
  },

  content: {
    ...theme.typography.body1,
  },
}))

const Faq = () => {
  const classes = useStyles()

  const {
    data: { edges: node },
  } = useStaticQuery(graphql`
    query getFaqs {
      data: allStrapiFaqs {
        edges {
          node {
            strapiId
            name
            content
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Grid classes={{ root: classes.mainContainer }}>
        {node.map(({ node }) => (
          <Grid
            item
            container
            classes={{ root: classes.accordionContainer }}
            key={node.strapiId}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  {node.name}
                </Typography>
              </AccordionSummary>
              {/*  */}
              <AccordionDetails>
                <ReactMarkdown className={classes.content} skipHtml>
                  {node.content}
                </ReactMarkdown>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Faq
