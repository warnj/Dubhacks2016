using System;
using System.Collections.Generic;
using System.Collections;
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
using System.Dynamic;
using TweetSharp;
using Microsoft.Office.Interop.Outlook;
using System.Diagnostics;
using System.Device;


// http://www.digitaltrends.com/computing/how-to-send-free-text-messages-online/

namespace DubHacks16
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public ArrayList contactList = new ArrayList();
        public Microsoft.Office.Interop.Outlook.Items OutlookItems;

        public MainWindow()
        {
            InitializeComponent();
            importContacts();
            contacts.ItemsSource = contactList;
            searchBox.Focus();
        }

        private void doubleClick(object sender, EventArgs e) {
            if(contacts.SelectedIndex > 0) {
                var d = new SendDialog(OutlookItems, contacts.SelectedIndex);
                if(d.ShowDialog() == true) {

                }
            }

        }

        private void searchChanged(object sender, TextChangedEventArgs e) {
            if (contacts.SelectedIndex < 0) contacts.SelectedIndex = 0;
            for (int i = contacts.SelectedIndex; i < contactList.Count; i++) {
                if(((String)(contactList[i])).StartsWith(((TextBox)sender).Text)) {
                    contacts.SelectedIndex = i;
                    break;
                }
            }
        }


        private void importContacts() {
            
            Microsoft.Office.Interop.Outlook.Application outlookObj = new Microsoft.Office.Interop.Outlook.Application();
            MAPIFolder Folder_Contacts;
            Folder_Contacts = (MAPIFolder)outlookObj.Session.GetDefaultFolder(OlDefaultFolders.olFolderContacts);
            OutlookItems = Folder_Contacts.Items;
            //Trace.WriteLine("num contacts: " + OutlookItems.Count.ToString());

            for (int i = 0; i < OutlookItems.Count; i++) {
                Microsoft.Office.Interop.Outlook.ContactItem contact = (Microsoft.Office.Interop.Outlook.ContactItem)OutlookItems[i + 1];
                contactList.Add(contact.FullName);
                //Trace.WriteLine("NAME: " + contact.FullName);
                //Trace.WriteLine("Company: " + contact.CompanyName);
                //Trace.WriteLine("Business: " + contact.BusinessAddressStreet);
                //Trace.WriteLine("postal and city: " + contact.BusinessAddressPostalCode + " " + contact.BusinessAddressCity);
                //Trace.WriteLine("email: " + contact.Email1Address);

            }
            contactList.Sort();
        }

        


    }
}
