const event = require("../modals/events");
const avenue = require("../modals/avenue");
require("dotenv").config();

exports.getEvent = async (req, res) => {

  const {avenueId} = req.body;
  const avenueInfo = await avenue.find({avenueName : avenueId})
  if(avenueInfo) {
    event.find({avenue : avenueId}, (error, events) => {
      if (error) {
        console.error("Failed to retrieve events", error);
        res.status(500).json({ error: "Failed to retrieve events" });
      } else {
        res.json({events: events, avenue : avenueInfo});
      }
    });
  }
};

exports.addEvent = async (req, res) => {
  const { title, desc, image, avenue,fullDesc, eventDate, eventURL } = req.body;

  const newEvent = new event({
    title,
    desc,
    image,
    fullDesc,
    eventDate,
    eventURL,
    avenue
  });

  newEvent.save((error, events) => {
    if (error) {
      console.error("Failed to add event", error);
      res.status(500).json({ error: "Failed to add event" });
    } else {
      res.json({
        eventId: events._id,
        title: events.title,
        desc: events.desc,
        image: events.image,
        fullDesc: events.fullDesc,
        eventDate: events.eventDate,
        eventURL: events.eventURL,
      });
    }
  });
};

exports.updateEvent = async (req, res) => {
  const { title, desc, image, fullDesc, eventId,eventDate,eventURL } = req.body;

  event.findByIdAndUpdate(
    eventId,
    { title, desc, image, fullDesc,eventDate,eventURL },
    { new: true },
    (error, updateEvent) => {
      if (error) {
        console.error("Failed to update event", error);
        res.status(500).json({ error: "Failed to update user" });
      } else {
        res.json({
          eventId: updateEvent._id,
          title: updateEvent.title,
          desc: updateEvent.desc,
          image: updateEvent.image,
          fullDesc:updateEvent.fullDesc,
          eventDate:updateEvent.eventDate,
          eventURL:updateEvent.eventURL
        });
      }
    }
  );
};

exports.deleteEvent = async (req, res) => {
  const { eventId } = req.body;

  event.findByIdAndRemove(eventId, (error, deletedEvent) => {
    if (error) {
      console.error("Failed to delete user", error);
      res.status(500).json({ error: "Failed to delete user" });
    } else if (!deletedEvent) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({
        message: "User deleted successfully",
        eventId: deletedEvent._id,
        title: deletedEvent.title,
      });
    }
  });
};

exports.addAvenue = async (req, res) => {

  const {avenueName, director, desc, fullDesc} = req.body;

  const newAvenue = new avenue({
    avenueName,
    director,
    desc,
    fullDesc
  })
  newAvenue.save((error, avenue) => {
    if(error) {
      console.log(error.message);
      return res.status(200).json({error})
    }
    return res.status(200).json({avenueName, director,desc,fullDesc});
  })
}