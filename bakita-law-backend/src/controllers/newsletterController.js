
import { supabase } from "../config/supabase.js";

import {
  sendNewsletterNotification,
  sendWelcomeNewsletterEmail,
} from "../services/emailService.js";

export const subscribe = async (
  req,
  res
) => {
  try {

    const { email } = req.body;

    const { data, error } =
      await supabase
        .from("newsletter")
        .insert([{ email }])
        .select();

    if (error) throw error;

    await sendNewsletterNotification(
      email
    );

    await sendWelcomeNewsletterEmail(
      email
    );

    res.status(201).json({
      success: true,
      message:
        "Subscribed successfully",
      data,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getSubscribers =
  async (req, res) => {
    try {

      const { data, error } =
        await supabase
          .from("newsletter")
          .select("*");

      if (error) throw error;

      res.status(200).json(data);

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };

