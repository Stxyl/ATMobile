//
//  ContentView.swift
//  ATHop
//
//  Created by Oryon Ivanov on 1/08/22.
//

import SwiftUI
import MapKit

struct ContentView: View {
    var body: some View {
        
        
        VStack {
            
            //Main Title Text
            Text("Pair your ATHop Card")
                .offset(y: -25)
                .font(.system(size: 27))
                .bold()
            
            //icon and background
            Image(systemName: "dot.radiowaves.left.and.right")
                .font(.system(size: 76))
                .offset(y: -5)
            
            //Secondary text
            Text("Hold your card to the top of your iPhone")
                .offset(y: 25)
                .foregroundColor(.secondary)
                .font(.system(size: 15))
                
        }
        .padding(.horizontal, 35)
        .padding(.vertical, 50)
        .background(.ultraThinMaterial)
        .cornerRadius(20)
        .ignoresSafeArea()
        .background(
            Image("Backgroundtemp")
        )
        .opacity(0.95)
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
