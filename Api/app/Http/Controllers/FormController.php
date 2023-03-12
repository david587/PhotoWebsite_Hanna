<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;


class FormController extends Controller
{

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'customSubject' => 'nullable',
            'message' => 'required',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        Form::create($request->all());

        // Send email
        $email = config('mail.from.address');
        $data = $request->all();
        Mail::to('2003khanna@gmail.com')->send(new ContactFormSubmitted($data,$email));
        Mail::to('davidbarath08@gmail.com')->send(new ContactFormSubmitted($data,$email));
    
        return response()->json(['message' => 'Üzenet sikeresen elküldve!'], 201);
    }
}
