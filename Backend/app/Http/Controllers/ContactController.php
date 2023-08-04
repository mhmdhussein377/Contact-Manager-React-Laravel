<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function createContact(Request $request) {

        $request->validate([
            'name' => 'required|string',
            'phone_number' => 'required|string',
            'longitude' => 'required|numeric',
            'latitude' => 'required|numeric'
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->latitude = $request->latitude;
        $contact->longitude = $request->longitude;

        if($contact) {
            return response()->json($contact);
        }else {
            return response()->json([
                'status' => 'error',
            ]);
        }
    }

    function getContacts($id = null) {

        if($id) {
            $contacts = Contact::all();
        }else {
            $contacts = Contact::find($id);
        }

        return response()->json($contacts);
    }

    function deleteContact($id) {

        Contact::find($id)->delete();

        return response()->json([
            'status' => 'successful',
            'message' => 'the contact has been deleted',
        ]);
    }
}
