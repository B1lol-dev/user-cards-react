import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IUser } from "@/types/api";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  CreditCard,
  User,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { useState } from "react";

interface UserCardProps {
  user: IUser;
}

export function UserCard({ user }: UserCardProps) {
  const [tab, setTab] = useState(1);

  // Format card number to show only last 4 digits
  const formatCardNumber = (cardNumber: string) => {
    return `**** **** **** ${cardNumber.slice(-4)}`;
  };

  // Format address
  const formatAddress = (address: IUser["address"]) => {
    return `${address.address}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`;
  };

  // Format company address
  const formatCompanyAddress = (address: IUser["company"]["address"]) => {
    return `${address.address}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={user.image || "/placeholder.svg"}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">
                {user.firstName} {user.lastName}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                <User className="h-3.5 w-3.5" />
                <span>@{user.username}</span>
              </CardDescription>
              <Badge variant="outline" className="mt-2">
                {user.role}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                {user.birthDate} ({user.age} years)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col justify-between">
          <div className="flex gap-1 items-center justify-center mb-2">
            <Button
              onClick={() => setTab(1)}
              className="w-1/4 bg-gray-200 text-black hover:bg-gray-300"
            >
              Personal
            </Button>
            <Button
              onClick={() => setTab(2)}
              className="w-1/4 bg-gray-200 text-black hover:bg-gray-300"
            >
              Address
            </Button>
            <Button
              onClick={() => setTab(3)}
              className="w-1/4 bg-gray-200 text-black hover:bg-gray-300"
            >
              Work
            </Button>
            <Button
              onClick={() => setTab(4)}
              className="w-1/4 bg-gray-200 text-black hover:bg-gray-300"
            >
              Financial
            </Button>
          </div>

          {tab === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Gender</p>
                  <p className="text-sm text-muted-foreground">{user.gender}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Blood Group</p>
                  <p className="text-sm text-muted-foreground">
                    {user.bloodGroup}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Height</p>
                  <p className="text-sm text-muted-foreground">
                    {user.height} cm
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Weight</p>
                  <p className="text-sm text-muted-foreground">
                    {user.weight} kg
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Eye Color</p>
                  <p className="text-sm text-muted-foreground">
                    {user.eyeColor}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Hair</p>
                  <p className="text-sm text-muted-foreground">
                    {user.hair.color}, {user.hair.type}
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Home Address</p>
                  <p className="text-sm text-muted-foreground">
                    {formatAddress(user.address)}
                  </p>
                  <div className="mt-2">
                    <p className="text-sm">
                      Coordinates: {user.address.coordinates.lat},{" "}
                      {user.address.coordinates.lng}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 3 && (
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">{user.company.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {user.company.title}, {user.company.department}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {formatCompanyAddress(user.company.address)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Education</p>
                  <p className="text-sm text-muted-foreground">
                    {user.university}
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab === 4 && (
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Bank Details</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <div>
                      <p className="text-sm font-medium">Card Number</p>
                      <p className="text-sm text-muted-foreground">
                        {formatCardNumber(user.bank.cardNumber)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Card Type</p>
                      <p className="text-sm text-muted-foreground">
                        {user.bank.cardType}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Expires</p>
                      <p className="text-sm text-muted-foreground">
                        {user.bank.cardExpire}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Currency</p>
                      <p className="text-sm text-muted-foreground">
                        {user.bank.currency}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-medium">Crypto</p>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div>
                    <p className="text-sm font-medium">Coin</p>
                    <p className="text-sm text-muted-foreground">
                      {user.crypto.coin}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Network</p>
                    <p className="text-sm text-muted-foreground">
                      {user.crypto.network}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Wallet</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {user.crypto.wallet}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Edit Profile</Button>
        <Button>Contact</Button>
      </CardFooter>
    </Card>
  );
}
