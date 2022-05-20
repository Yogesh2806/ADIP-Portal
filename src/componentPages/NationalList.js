import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const NationalList = () => {
  return (
    <div className="national-list">
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea className="card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Artificial Limbs Manufacturing Corporation of India (ALIMCO)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rehabilitation Aids for persons with disabilities and by
              promoting, encouraging and developing the availability, use,
              supply and distribution of Artificial Limbs and other
              Rehabilitation Aids to the disabled persons of the country.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.alimco.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Institute for the Empowerment of Persons with
              Intellectual Disabilities (NIEPID)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              NIEPID (Formely NIMH) is dedicated to provide quality services to
              Persons with Intellectual Disabilities (Divyangjan) in the
              National interest.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.niepid.nic.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pt Deendayal Upadhaya National Institute for Person with Physical
              Disabilities (PDUNIPPD)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Institute aims to serve the physically disabled of all age
              groups. In this pursuit of alleviating the suffering of disabled
              people
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.alimco.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ali Yavar Jung National Institute of Speech and Hearing
              Disabilities (AYJNISHD)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These are centres aimed at meeting the local and regional needs in
              terms of manpower development and services.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.ayjnihh.nic.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Institute of Rehabilitation Training & Research
              (SVNIRTAR)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Govt. of India. It provides total medical rehabilitation for the
              Persons with Locomotor Disabilities.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="http://www.svnirtar.nic.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Institute for Empowerment of Persons with Multiple
              Disabilites (NIEPMD)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Multiple Disabilities including deafblindness, Acid Attack victim,
              Parkinson's disease and as per The National Trust (1999) Act, are
              Autism, Cerebral Palsy, Mental Retardation and Multiple
              Disabilities.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://niepmd.tn.nic.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Institute for the Empowerment of Persons with Visual
              Disabilities (NIEPVD)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Institute is largest producer and distributor of Braille
              literature and devices in the country including talking books.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="http://nivh.gov.in/index.php"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
      <Card
        className="cards"
        sx={{ maxWidth: 900, backgroundColor: "rgba(63, 63, 63, 0.15)" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Institute for Locomotor Disabilities (NILD)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To provide consultancy to the State Government and voluntary
              agencies. To serve as an apex documentation and information centre
              in the area of disability & rehabilitation
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/request">
            Request Now
          </Button>
          <Button
            size="small"
            color="primary"
            href="http://niohkol.nic.in/"
            target="_blank"
          >
            Know More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NationalList;
