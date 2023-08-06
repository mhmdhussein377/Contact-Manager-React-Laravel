<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
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
        $contact->save();

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
            $contacts = Contact::find($id);
        }else {
            $contacts = Contact::all();
        }

        return response()->json($contacts);
    }

    function updateContact(Request $request, $id) {

        $request->validate([
            'name' => 'required|string',
            'phone_number' => 'required|string',
            'longitude' => 'required|numeric',
            'latitude' => 'required|numeric'
        ]);

        $contact = Contact::find($id);

        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->longitude = $request->longitude;
        $contact->latitude = $request->latitude;
        $contact->save();

        return response()->json([
            'status' => 'success',
            'message' => 'the contact has been updated'
        ]);
    }

    function deleteContact($id) {

        Contact::find($id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'the contact has been deleted',
        ]);
    }
}
