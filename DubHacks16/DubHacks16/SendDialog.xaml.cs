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
using Microsoft.Office.Interop.Outlook;
using System.Diagnostics;
using System.Device.Location;

namespace DubHacks16 {
    /// <summary>
    /// Interaction logic for SendDialog.xaml
    /// </summary>
    public partial class SendDialog : Window {
        private Microsoft.Office.Interop.Outlook.Items OutlookItems;
        public int result { get; set; }
        private GeoCoordinate coor;

        public SendDialog(Microsoft.Office.Interop.Outlook.Items items, int index) {
            result = 0;
            OutlookItems = items;
            InitializeComponent();
            coor = GetLocationProperty();
            if (coor.IsUnknown != true) {
                location.Text = String.Format("Lat: {0}, Long: {1}",
                    coor.Latitude,
                    coor.Longitude);
            } else {
                location.Text = "Unknown location.";
            }
        }

        private void rendered(object sender, EventArgs e) {
            //DialogResult = false;
        }

        /*
        public void SendText(object sender, EventArgs e) {
            if (carriers.SelectedIndex == 0) {
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
        */

            

    private GeoCoordinate GetLocationProperty() {
        GeoCoordinateWatcher watcher = new GeoCoordinateWatcher();

        // Initiate acquisition of location data, so that we 
        // can get location coordinates from the Position property.
        // 1. If we don’t have access to the location sensors, 
        // the user will be prompted with a permission dialog.
        // 2. If we have permissions, following this call, we can 
        //    access location data from the Position property, 
        //    and we'll get PositionChanged events if we have set
        //    up an event handler.

        watcher.TryStart(false, // Do not suppress permissions prompt.
           TimeSpan.FromMilliseconds(2000)); // Wait 1000 ms to start.

       return watcher.Position.Location;
    }

    private void send(object sender, EventArgs e) {
            sendEmail("warnj@outlook.com", input.Text);
            sendEmail("5099490962@email.uscc.net", input.Text);
            DialogResult = true;
        }

        private void cancel(object sender, EventArgs e) {
            DialogResult = false;
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

        }


    }
}
