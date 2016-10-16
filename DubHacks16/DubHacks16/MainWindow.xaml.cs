using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Net.Mail;
using System.Net;
using Facebook;
using TweetSharp;



// http://www.digitaltrends.com/computing/how-to-send-free-text-messages-online/

namespace DubHacks16
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            phoneTxt.Text = "5099490962";
            emailTxt.Text = "warnj@outlook.com";
        }

        public void SendText(object sender, EventArgs e)
        {
            if(carriers.SelectedIndex == 0) {
                sendEmail(phoneTxt.Text.Trim() + "@sms.alltelwireless.com", "body");
            } else if (carriers.SelectedIndex == 1) {
                sendEmail(phoneTxt.Text.Trim() + "@txt.att.net", "body");
            } else if (carriers.SelectedIndex == 2) {
                sendEmail(phoneTxt.Text.Trim() + "@sms.myboostmobile.com", "body");
            } else if (carriers.SelectedIndex == 3) {
                sendEmail(phoneTxt.Text.Trim() + "@messaging.sprintpcs.com", "body");
            } else if (carriers.SelectedIndex == 4) {
                sendEmail("1" + phoneTxt.Text.Trim() + "@tmomail.net", "body");
            } else if (carriers.SelectedIndex == 5) {
                sendEmail(phoneTxt.Text.Trim() + "@email.uscc.net", "body");
            } else if (carriers.SelectedIndex == 6) {
                sendEmail(phoneTxt.Text.Trim() + "@vtext.com", "body");
            } else if (carriers.SelectedIndex == 7) {
                sendEmail(phoneTxt.Text.Trim() + "@vmobl.com", "body");
            }
        }



        public void SendEmail(object sender, EventArgs e)
        {
            sendEmail(emailTxt.Text.Trim(), "body");
        }

        private void sendEmail(string to, string text) {
            MailMessage mail = new MailMessage("warnj3@gmail.com", to);
            mail.Body = "text";
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.EnableSsl = true;
            client.Credentials = new NetworkCredential("warnj3@gmail.com", "Cessn@70");
            client.Host = "smtp.gmail.com";
            client.SendMailAsync(mail);
        }

        public void showFacebook(object sender, EventArgs e) {
            //FacebookAPI fbApi = new FacebookAPI();
            //JSONObject codesamplezObject = fbApi.Get("/106181569450743");
            //String companyOverview = codesamplezObject.Dictionary["company_overview"].String;

            //var twitter = FluentTwitter.CreateRequest()
            //.AuthenticateAs("USERNAME", "PASSWORD")
            //.Statuses().Update("Hello World!")
            //.AsJson();

            //var response = twitter.Request();


        }


    }
}
