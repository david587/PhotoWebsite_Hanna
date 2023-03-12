<p>A new contact form has been submitted with the following details:</p>

<ul>
    <li><strong>Name:</strong> {{ $data['firstName'] }} {{ $data['lastName'] }}</li>
    <li><strong>Email:</strong> {{ $data['email'] }}</li>
    <li><strong>Subject:</strong> {{ $data['subject'] }}</li>
    @if (!empty($data['customsubject']))
        <li><strong>Custom Subject:</strong> {{ $data['customsubject'] }}</li>
    @endif
    <li><strong>Message:</strong> {{ $data['message'] }}</li>
</ul>

<p>Thanks,</p>
