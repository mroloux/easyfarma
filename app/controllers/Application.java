package controllers;

import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import play.libs.Mail;
import play.mvc.Controller;

public class Application extends Controller {

    public static void index() {
        render();
    }

    public static void houMeOpDeHoogte(String name, String email) throws EmailException {
        sendEmail("Hou me op de hoogte formulier ingevuld", name + " - " + email);
    }

    public static void contact(String name, String email, String message) throws EmailException {
        sendEmail("Contact formulier ingevuld", name + " - " + email + " - " + message);
    }

    private static void sendEmail(String subject, String body) throws EmailException {
        SimpleEmail simpleEmail = new SimpleEmail();
        simpleEmail.setFrom("noreply@easyfarma.be");
        simpleEmail.addTo("matti@easyfarma.be");
        simpleEmail.setSubject(subject);
        simpleEmail.setMsg(body);
        Mail.send(simpleEmail);
        renderText("Thanks pal!");
    }

}