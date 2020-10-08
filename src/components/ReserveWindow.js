import React, { useContext, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers"
import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
import Modal from "@material-ui/core/Modal"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import PeopleIcon from "@material-ui/icons/People"
import EventIcon from "@material-ui/icons/Event"
import PhoneIcon from "@material-ui/icons/Phone"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PersonIcon from "@material-ui/icons/Person"
import ScheduleIcon from "@material-ui/icons/Schedule"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import { LanguageContext } from "../components/layout"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    maxHeight: " 100vh",
    width: 320,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1, 0),
    zIndex: 9999,
    position: "fixed",
    outline: 0,
  },
  timeline: {
    margin: 0,
    padding: 0,
  },
  timelineItem: {
    margin: 0,
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(0),
    width: 190,
  },
  reservierenBtn: {
    color: theme.third.backgroundColor,
    backgroundColor: theme.third.color,
    position: "relative",
    left: "45%",
    transform: "translate(-50%, 0)",
    "&:hover": {
      fontWeight: "bold",
      color: theme.third.color,
      backgroundColor: theme.third.backgroundColor,
    },
  },
  timeLineDot: {
    color: theme.third.color,
    backgroundColor: theme.third.backgroundColor,
  },
}))

const defaultValues = {
  date: null, // Don't use empty strings ""
  time: null,
}

const schemaRus = yup.object().shape({
  peopleCount: yup
    .string()
    .required("Поле, обязательное для заполнения")
    .matches(/^\d{1,2}$/, "Введите корректное количество людей"),
  date: yup.string().nullable().required("Поле, обязательное для заполнения"),
  time: yup.string().nullable().required("Поле, обязательное для заполнения"),
  name: yup
    .string()
    .required("Поле, обязательное для заполнения")
    .min(3, "Имя должно состоять не менее чем из 3 символов.")
    .max(20, "Имя должно содержать не более 20 символов."),
  phone: yup
    .string()
    .required("Поле, обязательное для заполнения")
    .matches(/^[0-9\-\+]{9,15}$/, "Введите корректный номер телефона"),
  email: yup
    .string()
    .required("Поле, обязательное для заполнения")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Введите коректный адрес электронной почты"
    ),
  // .email('Please check your email')
})

const schemaDeu = yup.object().shape({
  peopleCount: yup
    .string()
    .required("Feld ist erforderlich")
    .matches(/^\d{1,2}$/, "Geben Sie die richtige Anzahl von Personen ein"),
  date: yup.string().nullable().required("Feld ist erforderlich"),
  time: yup.string().nullable().required("Feld ist erforderlich"),
  name: yup
    .string()
    .required("Feld ist erforderlich")
    .min(3, "Der Name muss mindestens 3 Zeichen lang sein")
    .max(20, "Der Name darf maximal 20 Zeichen lang sein"),
  phone: yup
    .string()
    .required("Feld ist erforderlich")
    .matches(/^[0-9\-\+]{9,15}$/, "falsche Telefonnummer"),
  email: yup
    .string()
    .required("Feld ist erforderlich")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Falsche Email"
    ),
  // .email('Please check your email')
})

const schemaGeo = yup.object().shape({
  peopleCount: yup
    .string()
    .required("ველია საჭირო")
    .matches(/^\d{1,2}$/, "შეიყვანეთ ხალხის სწორი რაოდენობა"),
  date: yup.string().nullable().required("ველია საჭირო"),
  time: yup.string().nullable().required("ველია საჭირო"),
  name: yup
    .string()
    .required("ველია საჭირო")
    .min(3, "სახელი უნდა იყოს მინიმუმ 3 სიმბოლო")
    .max(20, "სახელი უნდა იყოს 20 სიმბოლო ან ნაკლები"),
  phone: yup
    .string()
    .required("ველია საჭირო")
    .matches(/^[0-9\-\+]{9,15}$/, "არასწორი ტელეფონის ნომერი"),
  email: yup
    .string()
    .required("ველია საჭირო")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "არასწორი იმეილი"
    ),
  // .email('Please check your email')
})

const schemaEng = yup.object().shape({
  peopleCount: yup
    .string()
    .required("Field is required")
    .matches(/^\d{1,2}$/, "enter the correct number of people"),
  date: yup.string().nullable().required("Field is required"),
  time: yup.string().nullable().required("Field is required"),
  name: yup
    .string()
    .required("Field is required")
    .min(3, "Name must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
  phone: yup
    .string()
    .required("Field is required")
    .matches(/^[0-9\-\+]{9,15}$/, "incorrect phone number"),
  email: yup
    .string()
    .required("Field is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "incorrect email"
    ),
  // .email('Please check your email')
})

export default function WindowReserve(props) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const { actLanguage } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  const classes = useStyles()

  const schema =
    actLanguage === "DEU"
      ? schemaDeu
      : actLanguage === "RUS"
      ? schemaRus
      : actLanguage === "ENG"
      ? schemaEng
      : actLanguage === "GEO"
      ? schemaGeo
      : null

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const errorPeopleCount =
    errors.hasOwnProperty("peopleCount") && errors["peopleCount"].message
  const errorDate = errors.hasOwnProperty("date") && errors["date"].message
  const errorTime = errors.hasOwnProperty("time") && errors["time"].message
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorPhone = errors.hasOwnProperty("phone") && errors["phone"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  const alertMessage =
    actLanguage === "DEU"
      ? "Vielen Dank!!! Wir werden uns bald bei Ihnen melden :-)"
      : actLanguage === "RUS"
      ? "Спасибо!!! Мы свяжемся с Вами в ближайшее время :-)"
      : actLanguage === "ENG"
      ? "Thank You!!! We will contact You soon :-)"
      : actLanguage === "GEO"
      ? "მადლობა !!! ცოტა ხანში დაგიკავშირდებით :-)"
      : null

  async function onSubmit(data) {
    if (!executeRecaptcha) {
      return
    }
    try {
      const result = executeRecaptcha("suliko_reserve_table")
      setToken(result) //--> grab the generated token by the reCAPTCHA
      handleLoadingOn()

      let response = await fetch(
        "https://suliko-mailer.herokuapp.com/reservation",
        // "http://localhost:3000/reservation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        alert(alertMessage)
        await props.onClose()
        // navigate("/")
        // window.location.reload()
        let responseJson = await response.json()
        handleLoadingOff()
        return responseJson
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <form
          // name="myForm"
          // method="post"
          // action="http://localhost:3000/reservation"
          // action="https://suliko-mailer.herokuapp.com/reservation"
          // onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Timeline className={classes.timeline}>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <PeopleIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      type="text"
                      name="peopleCount"
                      id="peopleCount"
                      label={
                        actLanguage === "DEU"
                          ? "Anzahl der Personen"
                          : actLanguage === "RUS"
                          ? "Количество гостей"
                          : actLanguage === "ENG"
                          ? "Number of people"
                          : actLanguage === "GEO"
                          ? "პირთა რაოდენობა"
                          : null
                      }
                      inputRef={register}
                      error={!!errorPeopleCount}
                      helperText={errorPeopleCount}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <EventIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <Controller
                      as={
                        <DatePicker
                          disableToolbar
                          disablePast
                          autoOk
                          style={{ marginTop: 15 }}
                          variant="inline"
                          format="dd/MM/yyyy"
                          error={!!errorDate}
                          helperText={errorDate}
                        />
                      }
                      InputProps={{ style: { fontSize: 18 } }}
                      control={control}
                      name="date"
                      placeholder={
                        actLanguage === "DEU"
                          ? "Datum"
                          : actLanguage === "RUS"
                          ? "Дата"
                          : actLanguage === "ENG"
                          ? "Date"
                          : actLanguage === "GEO"
                          ? "თარიღი"
                          : null
                      }
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <ScheduleIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <Controller
                      as={
                        <TimePicker
                          autoOk
                          ampm={false}
                          style={{ marginTop: 15 }}
                          variant="inline"
                          ampm={false}
                          error={!!errorTime}
                          helperText={errorTime}
                        />
                      }
                      control={control}
                      name="time"
                      InputProps={{ style: { fontSize: 18 } }}
                      placeholder={
                        actLanguage === "DEU"
                          ? "Zeit"
                          : actLanguage === "RUS"
                          ? "Время"
                          : actLanguage === "ENG"
                          ? "Time"
                          : actLanguage === "GEO"
                          ? "დრო"
                          : null
                      }
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <PersonIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      type="text"
                      name="name"
                      id="name"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      label={
                        actLanguage === "DEU"
                          ? "Ihr Name"
                          : actLanguage === "RUS"
                          ? "Ваше имя"
                          : actLanguage === "ENG"
                          ? "Your name"
                          : actLanguage === "GEO"
                          ? "Თქვენი სახელი"
                          : null
                      }
                      inputRef={register}
                      error={!!errorName}
                      helperText={errorName}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <PhoneIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      type="text"
                      name="phone"
                      id="phone"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      label={
                        actLanguage === "DEU"
                          ? "Telefon"
                          : actLanguage === "RUS"
                          ? "Телефон"
                          : actLanguage === "ENG"
                          ? "Phone"
                          : actLanguage === "GEO"
                          ? "ტელეფონი"
                          : null
                      }
                      inputRef={register}
                      error={!!errorPhone}
                      helperText={errorPhone}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timeLineDot}>
                    <AlternateEmailIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      type="email"
                      name="email"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      label={
                        actLanguage === "DEU"
                          ? "Email"
                          : actLanguage === "RUS"
                          ? "Эл. почта"
                          : actLanguage === "ENG"
                          ? "Email"
                          : actLanguage === "GEO"
                          ? "ელ.ფოსტა"
                          : null
                      }
                      inputRef={register}
                      error={!!errorEmail}
                      helperText={errorEmail}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </MuiPickersUtilsProvider>
          <IconButton
            style={{ margin: 0, padding: 0, left: "10%" }}
            onClick={props.onClose}
          >
            <HighlightOffIcon />
          </IconButton>
          <Button
            id="submit"
            name="submit"
            type="submit"
            variant="outlined"
            className={classes.reservierenBtn}
            disabled={loading}
          >
            {loading
              ? actLanguage === "DEU"
                ? "Wird geladen..."
                : actLanguage === "RUS"
                ? "Загрузка ..."
                : actLanguage === "GEO"
                ? "Ჩატვირთვა"
                : actLanguage === "ENG"
                ? "Loading..."
                : null
              : actLanguage === "DEU"
              ? "Reservieren jetzt"
              : actLanguage === "RUS"
              ? "Забронировать"
              : actLanguage === "GEO"
              ? "Დაჯავშნა"
              : actLanguage === "ENG"
              ? "Reserve now"
              : null}
          </Button>
        </form>
      </div>
    </Modal>
  )
}
