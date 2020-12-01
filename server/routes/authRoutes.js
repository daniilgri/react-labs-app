const { Router } = require("express");
const admin = require("firebase-admin");

const routes = Router();

routes.post("/delete_user", async (req, res) => {
  try {
    const { userUid } = req.body;
    if (userUid === "") {
      throw new Error({
        code: 400,
        message: "Provide user uid to process operation!",
      });
    }

    await admin.auth().deleteUser(userUid);
    const userSnapshot = await admin
      .firestore()
      .collection("users")
      .where("uid", "==", userUid)
      .get();

    userSnapshot.docs[0].ref.delete();

    const ordersSnapshot = await admin
      .firestore()
      .collection("orders")
      .where("userUid", "==", userUid)
      .get();
    ordersSnapshot.docs.forEach(doc => {
      doc.ref.delete();
    });

    res.status(200).send({});
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

exports.authRoutes = routes;
